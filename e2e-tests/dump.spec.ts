import { test } from "./helpers/test_helper";

// This is useful to make sure the messages are being sent correctly.
test("dump messages", async ({ po }) => {
  await po.setUp();
  // TEMP: why is dump_messages failing?
  await po.sendPrompt("hi");
  await po.snapshotServerDump();
});
