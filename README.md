# Execute

just execute
```
npm install
node bin/index.js --token=YOUR_GITHUB_TOKEN --source=WEBHOOK_PAYLOAD_URL --file=THE_FILE_PATH_CONTAINING_REPOSITORY_LIST [--url=NEW_PAYLOAD_URL --content_type=NEW_CONTENT_TYPE --secret=NEW_SECRET --insecure_ssl=NEW_INSECURE_SSL --address=NEW_ADDRESS --room=NEW_ROOM]
```

All those parameters in `[` and `]` are optional, this means that only those that should be changed must be provided. Note that if none of them is provided the webhook configuration won't be changed at all.

> **NOTE**: `source` argument is used just for webhook filtering

> **NOTE**: `secret` argument must be provided since the information coming from the service is `******`

# Repository List file format

* the file should be utf-8
* should contain a repository per line
* the repository should match owner/repo format, like `kiegroup/jbpm`

## Example

```
kiegroup/droolsjbpm-build-bootstrap
kiegroup/kie-soup
kiegroup/droolsjbpm-knowledge
kiegroup/drools
kiegroup/optaplanner
kiegroup/lienzo-core
kiegroup/lienzo-tests
kiegroup/appformer
kiegroup/kie-uberfire-extensions
kiegroup/jbpm
kiegroup/droolsjbpm-integration
kiegroup/kie-wb-playground
kiegroup/kie-wb-common
kiegroup/drools-wb
kiegroup/jbpm-work-items
kiegroup/jbpm-wb
kiegroup/optaplanner-wb
kiegroup/kie-wb-distributions
kiegroup/process-migration-service
kiegroup/kie-jpmml-integration
kiegroup/kie-docs
```

