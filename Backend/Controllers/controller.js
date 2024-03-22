import fruits from "../JSON/data.json" with { type: "json" };

export const HomePage = (req, res) => {
  res.render("homePage.ejs", {
    title: "Home Page",
  });
};

export const ListOfFruit = (req, res) => {
  res.status(200).json({
    message: "List of all fruits",
    fruits,
  });
};
