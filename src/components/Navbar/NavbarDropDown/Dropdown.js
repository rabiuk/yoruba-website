import { useState } from "react";
import { dropdownItems } from "./dropdowndata";
import {
  UnorderedList,
  List,
  ListItem,
  Wrapper,
  ItemLink,
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
                        {/* <Link to={subItem.href}>{subItem.title}</Link> */}
                        <ItemLink href={subItem.href}>{subItem.title}</ItemLink>
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
