const report = {
  time: "2019-01-21T19:07.28Z",
  services: [
    {
      name: "worker",
      subs: [
        {
          name: "rabbitmq",
          status: true
        },
        {
          name: "mongodb",
          status: false
        },
        {
          name: "datatracking",
          status: true
        }
      ]
    },
    {
      name: "webserver",
      subs: [
        {
          name: "php7",
          status: true
        },
        {
          name: "nginx",
          status: false
        }
      ]
    },
    {
      name: "search",
      subs: [
        {
          name: "nginx",
          status: true
        },
        {
          name: "supervisor",
          status: false
        }
      ]
    }
  ]
};

export function getReport() {
  return report;
}
