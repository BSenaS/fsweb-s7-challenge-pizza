
//HomePage im deki h1 Elementine test.
describe("Home Page" , () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("greets with homepage", () => {
    cy.get("h1").should("contain","Teknolojik Yemekler")
  });
});

describe("Pizza Page" , () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  //Sayfa yüklendiğin de butonum disabled mı?
  it("Button is disabled", () => {
    cy.contains("button","SİPARİŞ VER").should("be.disabled");
  });

  //İnputa metin giren test
  it("Inputa metin girilebiliyormu?", () => {
    cy.get(`[data-cy="isimAlani"]`).type("Buraya İsim Girilecek");
  })
  //Birden fazla malzeme seçilebiliyormu?
  it("birden fazla malzeme seçilebilen bir test", () => {
    cy.get(`[data-cy="malzeme-test"]`).eq(0).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(1).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(2).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(3).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(8).check();
  })

});

