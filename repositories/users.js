const fs = require('fs');
const crypto = require('crypto');

class UserRepository {
  constructor(filename) {
    if (!filename) throw new Error('Creating a repository requires a filename');
    this.filename = filename;

    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, '[]');
    }
  }

  getAll = async () =>
    JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: 'utf8',
      }),
    );

  writeAll = async (records) => {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2),
    );
  };

  randomId = () => crypto.randomBytes(4).toString('hex');

  getOne = async (id) => {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  };

  create = async (attributes) => {
    attributes.id = this.randomId();
    const records = await this.getAll();
    records.push(attributes);

    await this.writeAll(records);
  };

  delete = async (id) => {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  };

  update = async (id, attributes) => {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) throw new Error(`Record with the id "${id}" is not found`);

    Object.assign(record, attributes);
    await this.writeAll(records);
  };

  getOneBy = async (filters) => {
    const records = await this.getAll();

    for (const record of records) {
      let found = true;

      for (const key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found) {
        return record;
      }
    }
  };
}

module.exports = new UserRepository('users.json');
