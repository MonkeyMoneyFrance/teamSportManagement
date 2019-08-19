module.exports = {
  apps : [
      {
        name: "TeamSport",
        script: "npm start",
        watch: true,
        env: {
            "PORT": 8080,//you can choose
            "NODE_ENV": "development"
        },
        env_production: {
            "PORT": 3000,//you can choose
            "NODE_ENV": "production",
            "DBUSER":"mymac",
            "DBPASS":"weiH8ahb",
            "SECRETKEY":"dhkzejgfkebrefxckjzrkeezrbe"
        }
      }
  ]
}
