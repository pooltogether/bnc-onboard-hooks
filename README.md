# PoolTogether bnc-onboard-hooks

Hooks for adding Onboard.js to PoolTogether dapps.

## NOTE

Make sure you keep `peerDependencies` and `devDependencies` versions in sync!

## How to use

1. `yarn add @pooltogether/utilities`
2. `import { hookYouWantToUse } from '@pooltogether/bnc-onboard-hooks'`
3. Ensure you call any required init functions early

## Local development

Local development works best with yalc
`yarn global add yalc`

In pooltogether-hooks:
`yarn start`

In the app you're importing pooltogether-hooks:
`yalc link @pooltogether/bnc-onboard-hooks`

When you save changes inside the hooks `src` folder, the package will rebuild and be pushed to all other projects that have run `yalc link @pooltogether/bnc-onboard-hooks`.

## TODO:

- jest tests
