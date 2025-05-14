# @posx/imin-cashdrawer

Cashdrawer plugin for imin android POS

## Install

```bash
npm install @posx/imin-cashdrawer
npx cap sync
```

## API

<docgen-index>

* [`open()`](#open)
* [`isOpen()`](#isopen)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### open()

```typescript
open() => Promise<{ success: boolean; }>
```

Open the cash drawer

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### isOpen()

```typescript
isOpen() => Promise<{ isOpen: boolean; }>
```

Get cash drawer status

**Returns:** <code>Promise&lt;{ isOpen: boolean; }&gt;</code>

--------------------

</docgen-api>
