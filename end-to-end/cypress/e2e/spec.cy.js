describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'La Mona Lisa del Prado'", () => {
    it("it should go to '/artworks/665ce6c919b649e012a2efe2'", () => {
      cy.visit("https://isayart.netlify.app");

      cy.contains(/La mona Lisa del Prado/i).click();

      cy.url().should("include", "/artworks/665ce6c919b649e012a2efe2");
    });
  });
});

describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'Añadir'", () => {
    it("it should go to '/create'", () => {
      cy.visit("https://isayart.netlify.app");

      cy.contains(/Añadir/i).click();

      cy.url().should("include", "/create");
    });
  });
});

describe("Given a user enters isayart.netlify.app/create", () => {
  describe("When it fills the form and submits ", () => {
    const laJovendeLaPerla = {
      title: "La joven de la Perla",
      author: "Johanes Vermeer",
      location: "La Haya, Holanda",
      size: {
        height: 47,
        width: 40,
      },
      medium: "Óleo sobre tela",
      artworkUrl:
        "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
      description:
        "La joven de la perla , también conocida como Muchacha con turbante, es una de las obras maestras del pintor neerlandés Johannes Vermeer realizada entre 1665 y 1667. Como el nombre indica, utiliza un pendiente de perla como punto focal.",
      year: 1667,
    };

    const fillForm = (artwork) => {
      cy.get("#title").click().type(artwork.title);
      cy.get("#author").click().type(artwork.author);
      cy.get("#location").click().type(artwork.location);
      cy.get("#height").click().type(artwork.size.height);
      cy.get("#width").click().type(artwork.size.width);
      cy.get("#medium").click().type(artwork.medium);
      cy.get("#artworkUrl").click().type(artwork.artworkUrl);
      cy.get("#description").click().type(artwork.description);
      cy.get("#year").click().clear().type(artwork.year);

      cy.get(".form__button").click();
    };
    it("it should show 'Obra añadida' and go to '/artworks'", () => {
      cy.visit("https://isayart.netlify.app/create");

      fillForm(laJovendeLaPerla);

      cy.should("include", /obra añadida/i);
      cy.url().should("include", "/artworks");
    });
  });
});
describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'la mona lisa' favourite button", () => {
    it("should change the favourite icon to eliminar de favoritos'", () => {
      cy.visit("https://isayart.netlify.app");

      cy.get(`[aria-label="añadir a favoritos"]`)
        .last()
        .click()
        .should("include", /eliminar de favoritos/i);
    });
  });
});

describe("Given a user enters isayart.netlify.app", () => {
  describe("When it clicks on 'la joven de la perla' delete button", () => {
    it("it should show 'Obra eliminada' and not contain 'la joven de la perla'", () => {
      cy.visit("https://isayart.netlify.app");

      cy.get(".delete-button").last().click();

      cy.should("include", /obra eliminada/i).and(
        "not.include",
        /la joven de la perla/i,
      );
    });
  });
});
