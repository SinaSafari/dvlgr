const bcrypt = require("bcrypt");

async function main() {
  const salt = await bcrypt.genSalt(8);
  console.log(await bcrypt.hash("123456", salt));
}
main();
