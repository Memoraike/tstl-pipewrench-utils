Support instanceof method from Project Zomboid lua.
Example:

```ts
import { DrainableComboItem } from '@asledgehammer/pipewrench';

function predicateNotFullPetrol(item: InventoryItem) {
  return item.hasTag('Petrol') && instanceOf(item, DrainableComboItem) && item.getUsedDelta() < 1;
}
```

Result to:

```lua
function predicateNotFullPetrol(item)
    return item:hasTag("Petrol") and instanceof(item, "DrainableComboItem") and item:getUsedDelta() < 1
end
```

# Build

```shell
npm install
npm tsc
npm version <version number>
npm publish
```
