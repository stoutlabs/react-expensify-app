import React from "react";
import { shallow } from "enzyme";
import { ExpenseListItem } from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("Should render an ExpenseListItem", () => {
  const expense = expenses[1];

  const wrapper = shallow(<ExpenseListItem key={1} {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
