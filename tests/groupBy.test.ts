import { groupBy } from "../lib";

interface Food {
  category: string;
  value: string;
}
describe("groupBy", () => {
  const foods: Food[] = [
    {
      category: "fruits",
      value: "apple",
    },
    {
      category: "fruits",
      value: "banana",
    },
    {
      category: "vegetable",
      value: "spinach",
    },
    {
      category: "fruits",
      value: "orange",
    },
    {
      category: "vegetable",
      value: "broccoli",
    },
  ];

  const groupByCategory = groupBy((item) => item.category);

  test("groups by category", () => {
    expect(groupByCategory(foods)).toEqual({
      fruits: [
        { category: "fruits", value: "apple" },
        { category: "fruits", value: "banana" },
        { category: "fruits", value: "orange" },
      ],
      vegetable: [
        { category: "vegetable", value: "spinach" },
        { category: "vegetable", value: "broccoli" },
      ],
    });
  });

  test("advanced grouping", () => {
    const byGrade = groupBy((student) => {
      const { score } = student;
      return score < 65 ? "F" : score < 70 ? "D" : score < 80 ? "C" : score < 90 ? "B" : "A";
    });
    const students = [
      { name: "Cabe", score: 99 },
      { name: "Saki", score: 100 },
      { name: "Abby", score: 84 },
      { name: "Eddy", score: 58 },
      { name: "Jake", score: 69 },
    ];

    expect(byGrade(students)).toEqual({
      A: [
        { name: "Cabe", score: 99 },
        { name: "Saki", score: 100 },
      ],
      B: [{ name: "Abby", score: 84 }],
      D: [{ name: "Jake", score: 69 }],
      F: [{ name: "Eddy", score: 58 }],
    });
  });
});
