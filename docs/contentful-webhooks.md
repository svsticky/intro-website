# Webhooks triggering workflows

We trigger workflows with webhooks, this time with contentful.

The knowledge on how to set up webhooks for contentful to trigger a workflow can
be transfered to other services who need to send webhooks as well.

## How to set up - Contentful side

Generically, you need to let Contentful send a POST request to an endpoint of
the GitHub API, triggering the workflow.

- Create webhook somehow, and set a good name.
- Make it POST to `https://api.github.com/repos/svsticky/REPONAME/actions/workflows/WORKFLOWNAME.yml/dispatches`
- Specify that the webhook should be called when entry/asset publish/unpublish
  only.
- If you distinguish between environments, add a filter that this webhook should
  only be called on the desired environment id ('master'/'development')
- Set two headers: `"user-agent": "contentful"` and an authorization field. Create
  the latter through 'Add HTTP Basic Auth header' and fill in only a password.
  This password must be the Personal Access Token of the svsticky-deploy bot.
  (See next section)
- Set content type to `application/json; charset=utf-8`
- Finally set the payload on `'{ "ref": "development" }` if pushing to 'development'
  branch, etc, if you distinguish environments.(Might always be required,
  regardless of whether you have different enviroments)

## How to set up - GitHub side

- Specify that the workflow should listen to `workflow_dispatch`
- Add svsticky-deploy user as contributor (write)
- Log in as the svsticky-deploy user and create a new Personal Acces Token with
  the following permissions: `repo:status` `repo_deployment` `public_repo`
- Copy the generated token and save it in bitwarden. Use this token in the
  section above. This makes the webhook authorize as the bot.

If you distinguish between environments (main, development), create a second
token as well for development. Also:

Make your workflow target the environment based on the github.ref or similar of the event
triggering the workflow. Because you set the custom payload in the webhook with
a ref, this will make the workflow trigger on a specific branch, and thus a
specific environment.
