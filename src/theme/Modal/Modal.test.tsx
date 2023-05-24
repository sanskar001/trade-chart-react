import React from "react";
import renderer from "react-test-renderer";
import Modal from ".";

const closeHandler = jest.fn();

jest.mock("react-dom", () => {
  const original = jest.requireActual("react-dom");
  return {
    ...original,
    createPortal: (node: React.ReactNode) => node,
  };
});

it("renders correctly when there is default modal", () => {
  const tree = renderer
    .create(
      <Modal isShowModal={true} onClose={closeHandler}>
        <div>
          <h1>Modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            labore.
          </p>
        </div>
      </Modal>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is modal custom class", () => {
  const tree = renderer
    .create(
      <Modal
        isShowModal={true}
        onClose={closeHandler}
        modalClass="bg-green-100"
        backdropClass="bg-blue-400/20"
      >
        <div>
          <h1>Modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            labore.
          </p>
        </div>
      </Modal>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly when there is modal with header and footer", () => {
  const tree = renderer
    .create(
      <Modal
        isShowModal={true}
        onClose={closeHandler}
        headerText="Modal Header"
        footerText="Modal Footer"
      >
        <div>
          <h1>Modal</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias,
            labore.
          </p>
        </div>
      </Modal>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
