import { HttpTransport } from "./src/transport/http.transport"; async function test() { const transport = new HttpTransport({ baseUrl: "https://api.hyperliquid.xyz", privateKey: "0x33abbf57cf08fc326809df2e8785a6ec242c266ced05785c3a391a980a695f5f", walletAddress: "0x2CE4EaF47CACFbC6590686f8f7521e0385822334", isMainnet: true }); const orderAction = { type: "order", orders: [{ a: 134, b: true, p: "0.62691", s: "500", r: false, t: { limit: { tif: "Gtc" } } }], grouping: "na" }; console.log("Placing order..."); const response = await transport.exchangeRequest(orderAction, null); console.log("Response:", JSON.stringify(response, null, 2)); } test().catch(console.error);