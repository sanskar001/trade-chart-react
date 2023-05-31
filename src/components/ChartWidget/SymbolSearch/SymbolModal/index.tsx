import React, { useEffect, useMemo, useState } from "react";
import Modal from "@/theme/Modal";
import SearchField from "@/theme/SearchField";
// import FilterTags from "@/theme/FilterTags";
import SymbolList from "../SymbolList";
// import { symbolFilterOptions } from "../symbolFilter";
import { SymbolListType, SymbolType } from "../SymbolList/type";
import { mockSymbolList } from "@/mocks/symbol_list";

interface SymbolModalProps {
  isShowModal: boolean;
  onClose: () => void;
  onSelectSymbol: (_val: SymbolType) => void;
}

const SymbolModal: React.FC<SymbolModalProps> = ({
  isShowModal,
  onClose,
  onSelectSymbol,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  // const [symbolFilter, setSymbolFilter] = useState<string>("all");
  const [symbolList, setSymbolList] = useState<SymbolListType>([]);

  useEffect(() => {
    setSymbolList(mockSymbolList);
  }, []);

  const filteredSymbolList = useMemo(() => {
    return symbolList;
  }, [symbolList]);

  const searchedSymbolList = useMemo(() => {
    return filteredSymbolList.filter((symbol) =>
      symbol.identifier.toLowerCase().includes(searchInput.trim())
    );
  }, [filteredSymbolList, searchInput]);

  return (
    <Modal
      isShowModal={isShowModal}
      onClose={onClose}
      headerText="Symbol Search"
      footerText="Simply start typing while on the chart to pull up this search box"
      modalClass="w-[85%] h-[80%] overflow-y-auto"
    >
      <div className="h-full flex flex-col">
        <SearchField
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {/* <FilterTags
          filterOptions={symbolFilterOptions}
          selectedValue={symbolFilter}
          setFilter={(val) => {
            setSymbolFilter(val);
          }}
          className="px-5 py-4"
        /> */}
        <SymbolList
          symbolList={searchedSymbolList}
          onSelect={(val) => onSelectSymbol(val)}
        />
      </div>
    </Modal>
  );
};

export default SymbolModal;
