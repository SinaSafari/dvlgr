# doc

- making migration:
  
```sh
npx knex migrate:make create_base_tables
```

- making seeders:

```zsh
npx knex seed:make users_seeder
```

- running migrations:

```sh
npx knex migrate:latest
```

- running seeders:

```sh
npx knex seed:run
```