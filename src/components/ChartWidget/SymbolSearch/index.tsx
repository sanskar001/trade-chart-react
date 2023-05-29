import React, { useState } from "react";
import Button from "@/theme/Button";
import FilterTags from "@/theme/FilterTags";
import Modal from "@/theme/Modal";
import SearchField from "@/theme/SearchField";
import { symbolFilterOptions } from "./symbolFilter";
import SymbolList from "./SymbolList";
import { symbolList } from "@/mocks/symbol_list";
import { SymbolType } from "./SymbolList/type";
import classes from "./SymbolSearch.module.css";

interface SymbolSearchProps {
  selectedSymbol: SymbolType;
  setSymbol: (_val: SymbolType) => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({
  selectedSymbol,
  setSymbol,
}) => {
  const [showSymbolModal, setShowSymbolModal] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [symbolFilter, setSymbolFilter] = useState<string>("all");

  const selectSymbolHandler = (val: SymbolType) => {
    setSymbol(val);
    setShowSymbolModal(false);
  };

  return (
    <>
      <Button
        onClick={setShowSymbolModal.bind(null, true)}
        className={classes.symbol_btn}
      >
        {selectedSymbol.product}
      </Button>
      <Modal
        isShowModal={showSymbolModal}
        onClose={setShowSymbolModal.bind(null, false)}
        headerText="Symbol Search"
        footerText="Simply start typing while on the chart to pull up this search box"
        modalClass={classes.symbol_modal}
      >
        <div className={classes.modal_body}>
          <SearchField
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FilterTags
            filterOptions={symbolFilterOptions}
            selectedValue={symbolFilter}
            setFilter={(val) => {
              setSymbolFilter(val);
            }}
            className={classes.symbol_filter}
          />
          <SymbolList symbolList={symbolList} onSelect={selectSymbolHandler} />
        </div>
      </Modal>
    </>
  );
};

export default SymbolSearch;
