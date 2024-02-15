import { createApp } from "@deroll/app";
import { createRouter } from "@deroll/router";
import { createWallet } from "@deroll/wallet";
import { decodeFunctionData, parseAbi } from "viem";

// create application
const app = createApp({
    url: process.env.ROLLUP_HTTP_SERVER_URL || "http://127.0.0.1:5004",
});

/* ABI based handler below using viem for input decoding
// define application ABI
const abi = parseAbi([
    "function attackDragon(uint256 dragonId, string weapon)",
    "function drinkPotion()",
]);

// handle input encoded as ABI function call
app.addAdvanceHandler(async ({ payload }) => {
    const { functionName, args } = decodeFunctionData({ abi, data: payload });

    switch (functionName) {
        case "attackDragon":
            const [dragonId, weapon] = args;
            console.log(`attacking dragon ${dragonId} with ${weapon}...`);
            return "accept";

        case "drinkPotion":
            console.log(`drinking potion...`);
            return "accept";
    }
});
*/

/* Wallet handling and wallet balance through routing below
// create wallet
const wallet = createWallet();

const router = createRouter({ app });
router.add<{ address: string }>(
    "wallet/:address",
    ({ params: { address } }) => {
        return JSON.stringify({
            balance: wallet.balanceOf(address),
        });
    },
);

app.addAdvanceHandler(wallet.handler);
app.addInspectHandler(router.handler);
*/

// start app
app.start().catch(() => process.exit(1));
