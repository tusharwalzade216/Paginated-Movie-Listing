import React from "react";
import { Pagination as BPagination } from "react-bootstrap";

const Pagination = ({ noOfPages, currentPage, setCurrentPage }) => (
    <BPagination className="my-4 flex-wrap">
        <BPagination.First
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)} />
        {[...Array(noOfPages + 1).keys()].slice(1)?.map((element, index) => (
            <BPagination.Item
                active={currentPage === element}
                key={index}
                onClick={() => setCurrentPage(element)}
            >
                {element}
            </BPagination.Item>
        ))}
        <BPagination.Last
            disabled={currentPage === noOfPages}
            onClick={() => setCurrentPage(currentPage + 1)} />
    </BPagination>
);

export default Pagination;
