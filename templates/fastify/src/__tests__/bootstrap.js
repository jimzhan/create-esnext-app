
jasmine.DEFAULT_TIMEOUT_INTERVAL = parseInt(process.env.TIMEOUT || 10000, 10)

beforeAll(async (done) => {
  /**
   * PUT your global pre-requisites here.
   */
  done()
})
