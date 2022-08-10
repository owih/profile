import '@/styles/main.scss'
async function example () {
  return await Promise.resolve('example');
}
example().then(console.log)
