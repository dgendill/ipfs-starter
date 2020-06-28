const testData = {
  name: 'Some Data'
};

// Object -> Promise Error CID
async function save(obj) {
  for await (const { cid } of node.add(JSON.stringify(obj))) {
    return cid;
  }
}

(function run() {

  document.addEventListener('DOMContentLoaded', async () => {
    const node = await Ipfs.create({ repo: 'ipfs-' + Math.random() })
    window.node = node

    const status = node.isOnline() ? 'online' : 'offline'

    console.log(`Node status: ${status}`)
    document.getElementById('status').innerHTML = `${status}`

    // You can write more code here to use it. Use methods like
    // node.add, node.get. See the API docs here:
    // https://github.com/ipfs/js-ipfs/tree/master/packages/interface-ipfs-core

    const cid = await save(testData);
    document.getElementById('data').innerHTML = JSON.stringify(testData)
    document.getElementById('cid').innerHTML = `https://cloudflare-ipfs.com/ipfs/${cid}`

  })

}());
