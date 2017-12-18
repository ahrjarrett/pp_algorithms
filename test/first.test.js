const id = x => x

describe("fail test", () => {
  it("identity should return true", () => {
      id(1).should.eql(1)
  })
})
