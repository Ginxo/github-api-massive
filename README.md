# Execute

just execute
```
npm install
node bin/index.js --token=YOUR_GITHUB_TOKEN --source=PAYLOAD_URL_TO_BE_CHANGED --target=NEW_PAYLOAD_URL --file=THE_FILE_PATH_CONTAINING_REPOSITORY_LIST
```

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

