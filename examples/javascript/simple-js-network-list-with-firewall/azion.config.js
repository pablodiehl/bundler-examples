export default {
  build: {
    builder: 'esbuild',
    entry: 'main.js',
    preset: {
      name: 'javascript',
    },
    useOwnWorker: true,
  },
  networkList: [
    {
      id: 1111,
      listType: 'ip_cidr',
      listContent: ['127.0.0.0/8'],
    },
  ],
};
