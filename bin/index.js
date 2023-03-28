#!/usr/bin/env node
// Licensed to the Apache Software Foundation (ASF) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The ASF licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.argv._

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv
const { Octokit } = require('@octokit/rest');
const fs = require('fs');

const WEBHOOK_PROPERTIES = ["url", "content_type", "secret", "insecure_ssl", "address", "room"]

async function run() {
    const octokit = new Octokit({
        auth: argv.token,
        userAgent: "ginxo/github-api-massive"
    });

    const repositories = fs.readFileSync(argv.file, { encoding: 'utf8', flag: 'r' }).toString().split("\n");
    for (const repository of repositories) {
        const owner = repository.split('/')[0];
        const repo = repository.split('/')[1];
        console.log(`Repository: ${owner}/${repo}`)
        const webhooks = await octokit.rest.repos.listWebhooks({
            owner, repo
        });

        if (webhooks.status === 200) {
            const filteredWebHooks = webhooks.data.filter(webhook => webhook.config.url === argv.source);
            if (!filteredWebHooks || !filteredWebHooks?.length) {
                console.warn(`Webhook ${argv.source} not found for ${repository}`);
            } else {
                for (const webhook of filteredWebHooks) {
                    console.log(webhook.id);

                    const configOverride = Object.fromEntries(Object.entries(argv).filter(([key, value]) => WEBHOOK_PROPERTIES.includes(key) && value !== undefined))

                    console.log(`Trying to update payload URL from ${webhook.config.url} to ${configOverride}`);
                    const updateWebhook = await octokit.rest.repos.updateWebhook({
                        owner,
                        repo,
                        hook_id: webhook.id,
                        config: {
                            ...webhook.config,
                            ...configOverride
                        }
                    });
                    if (updateWebhook.status === 200) {
                        console.log('updated');
                    } else {
                        console.warn('NOT UPDATED', updateWebhook)
                    }
                }
            }
        }
        console.log();
    }
}

run();



