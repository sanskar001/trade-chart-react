import React, { useState } from "react";
import Button from "@/theme/Button";
import FilterTags from "@/theme/FilterTags";
import Modal from "@/theme/Modal";
import SearchField from "@/theme/SearchField";
import { SymbolFilterType, symbolFilterOptions } from "./symbolFilter";
import SymbolList from "./SymbolList";
import { symbolList } from "@/mocks/symbol_list";

interface SymbolSearchProps {
  selectedSymbol: string;
  setSymbol: (_val: string) => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({
  selectedSymbol,
  setSymbol,
}) => {
  const [showSymbolModal, setShowSymbolModal] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [symbolFilter, setSymbolFilter] = useState<string>(
    SymbolFilterType.all
  );

  const selectSymbolHandler = (val: string) => {
    setSymbol(val);
    setShowSymbolModal(false);
  };

  return (
    <>
      <Button
        onClick={setShowSymbolModal.bind(null, true)}
        className="h-full w-[130px] px-2 text-sm font-semibold text-left text-truncate"
      >
        {selectedSymbol}
      </Button>
      <Modal
        isShowModal={showSymbolModal}
        onClose={setShowSymbolModal.bind(null, false)}
        headerText="Symbol Search"
        footerText="Simply start typing while on the chart to pull up this search box"
        modalClass="w-[85%] h-[80%] overflow-y-auto"
      >
        <div className="h-full flex flex-col">
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
            className="px-5 py-4"
          />
          <SymbolList symbolList={symbolList} onSelect={selectSymbolHandler} />
        </div>
      </Modal>
    </>
  );
};

export default SymbolSearch;
