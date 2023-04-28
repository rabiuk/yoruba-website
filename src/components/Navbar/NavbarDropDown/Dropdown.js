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
        <UnorderedList
          // showDropDown={showDropDown}
          onClick={() => setshowDropDown(!showDropDown)}
        >
          <Wrapper>
            {dropdownItems.map((item) => {
              return item.title === title
                ? item.subItems.map((subItem) => {
                    return (
                      <ListItem
                        key={subItem.id}
                        onClick={() => setshowDropDown(false)}
                      >
                        <Link to={subItem.path}>{subItem.title}</Link>
                      </ListItem>
                    );
                  })
                : null;
            })}
          </Wrapper>
        </UnorderedList>
      )}
    </>
  );
};

export default Dropdown;
