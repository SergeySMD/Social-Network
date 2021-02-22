import React from 'react';
import {Dropdown, Pagination} from "semantic-ui-react";
import s from "./Users.module.css";
import "./user-pagination.css";

let UserPaginationMenu = (props) => {
    return (
        <div className={s.pages}>
            <div className={s.pageSizeBlock}>
                <div className={s.text}>Показывать на странце:</div>
                <div className={s.menu}>
                    <Dropdown text={props.pageSize}>
                        <Dropdown.Menu>
                            <Dropdown.Item key="10" text='10' value='10' disabled={props.pageSize === '10'}
                                           onClick={(e, data) => {
                                               props.onPageSizeClick(data.value)
                                           }}/>
                            <Dropdown.Item key="20" text='20' value='20' disabled={props.pageSize === '20'}
                                           onClick={(e, data) => {
                                               props.onPageSizeClick(data.value)
                                           }}/>
                            <Dropdown.Item key="30" text='30' value='30' disabled={props.pageSize === '30'}
                                           onClick={(e, data) => {
                                               props.onPageSizeClick(data.value)
                                           }}/>
                            <Dropdown.Item key="40" text='40' value='40' disabled={props.pageSize === '40'}
                                           onClick={(e, data) => {
                                               props.onPageSizeClick(data.value)
                                           }}/>
                            <Dropdown.Item key="50" text='50' value='50' disabled={props.pageSize === '50'}
                                           onClick={(e, data) => {
                                               props.onPageSizeClick(data.value)
                                           }}/>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            {props.pagesCount !== 0 ? <div className={s.paginationBlock}>
                <Pagination
                    totalPages={props.pagesCount}
                    activePage={props.currentPage}
                    onPageChange={(event, data) => props.onPageClick(data.activePage)}
                    ellipsisItem={null}
                    boundaryRange="0"
                    siblingRange="2"/>
            </div> : null}
        </div>
    )
}

export default UserPaginationMenu;