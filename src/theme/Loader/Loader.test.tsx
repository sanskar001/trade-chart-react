import renderer from "react-test-renderer";
import Loader from ".";

it("renders correctly when there is default loader", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is loader with custom style", () => {
  const tree = renderer
    .create(
      <Loader style={{ width: "64px", height: "64px", color: "orange" }} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
