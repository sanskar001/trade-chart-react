import renderer from "react-test-renderer";
import FilterTags from ".";
import { FilterOption } from "./type";

const filterOptions: FilterOption[] = [
  { value: "first", label: "First Tag" },
  { value: "second", label: "Second Tag" },
];

const setFilter = jest.fn();

it("renders correctly when there is default filterTags", () => {
  const tree = renderer
    .create(
      <FilterTags
        filterOptions={filterOptions}
        selectedValue="first"
        setFilter={setFilter}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is filterTags with custom class", () => {
  const tree = renderer
    .create(
      <FilterTags
        filterOptions={filterOptions}
        selectedValue="first"
        setFilter={setFilter}
        className="p-4 border"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is filterTags with custom style", () => {
  const tree = renderer
    .create(
      <FilterTags
        filterOptions={filterOptions}
        selectedValue="first"
        setFilter={setFilter}
        style={{ padding: "4px" }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is filterTags with custom name", () => {
  const tree = renderer
    .create(
      <FilterTags
        filterOptions={filterOptions}
        selectedValue="first"
        setFilter={setFilter}
        style={{ padding: "4px" }}
        name="symbol filter"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
