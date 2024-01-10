
//HomePage im deki h1 Elementine test.
describe("Home Page" , () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("greets with homepage", () => {
    cy.get("h1").should("contain","Teknolojik Yemekler")
  });
});


  it("e2e testi", () => {
    cy.visit("http://localhost:3000/pizza")
  //Sayfa yüklendiğin de butonum disabled mı?
    cy.contains("button","SİPARİŞ VER").should("be.disabled");

  //İnputa metin giren test
    cy.get(`[data-cy="isimAlani"]`).type("Buraya İsim Girilecek");

  //Birden fazla malzeme seçilebiliyormu?
    cy.get(`[data-cy="malzeme-test"]`).eq(0).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(1).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(2).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(3).check();
    cy.get(`[data-cy="malzeme-test"]`).eq(8).check();

  //Boyut
    cy.get(`[type="radio"]`).eq(2).check();
  //Hamur Kalınlıgı
    cy.get(`[name="options"]`).select(["orta"]);
  //Formu Gönder
    cy.get(`[data-cy="form-button"]`).click()

});

