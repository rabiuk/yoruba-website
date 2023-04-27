import React from "react";
import { useState } from "react";
import { dropdownItems } from "./dropdownItems";
import {
  UnorderedList,
  List,
  ListItem,
  Link,
  Wrapper,
} from "./DropdownElements.js";

const Dropdown = ({ title }) => {
  const [showDropDown, setshowDropDown] = useState(true);

  return (
    <>
      {showDropDown && (
        <UnorderedList onClick={() => setshowDropDown(!showDropDown)}>
          {dropdownItems.map((item) => {
            return item.title === title
              ? item.subItems.map((subItem) => {
                  return (
                    <Wrapper>
                      <List key={subItem.id}>
                        <ListItem onClick={() => setshowDropDown(false)}>
                          <Link to={subItem.path}>{subItem.title}</Link>
                        </ListItem>
                      </List>
                    </Wrapper>
                  );
                })
              : null;
          })}
        </UnorderedList>
      )}
    </>
  );
};

export default Dropdown;
