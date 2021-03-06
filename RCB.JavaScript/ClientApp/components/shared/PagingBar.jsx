import Pagination from "react-paginating";
import * as React from "react";
import bind from 'bind-decorator';

/* Below code of the 'Pagination' component was taken 
from the https://github.com/ChoTotOSS/react-paginating 
and remaked for the Bootstrap style. */

export class PagingBar extends React.Component {

    constructor(props) {
        super(props);
    }

    elFirstPageBtn;
    elLastPageBtn;

    @bind
    setFirstPage() {
        this.elFirstPageBtn.click();
    }
    
    @bind
    setLastPage() {
        this.elLastPageBtn.click();
    }

    render() {
        return <Pagination
            total={this.props.totalResults}
            limit={this.props.limitPerPage}
            currentPage={this.props.currentPage}
        >
            {({
                pages,
                currentPage,
                hasNextPage,
                hasPreviousPage,
                previousPage,
                nextPage,
                totalPages,
                getPageItemProps
            }) => (
                    <ul className="pagination">
                        <li>
                            <span 
                                {...getPageItemProps({
                                    pageValue: 1,
                                    onPageChange: this.props.onChangePage
                                })}
                                ref={x => this.elFirstPageBtn = x}
                            >
                                first
                </span>
                        </li>

                        {hasPreviousPage && (
                            <li>
                                <span 
                                    {...getPageItemProps({
                                        pageValue: previousPage,
                                        onPageChange: this.props.onChangePage
                                    })}
                                >
                                    {'<'}
                                </span>
                            </li>
                        )}

                        {pages.map(page => {
                            return (
                                <li key={page} className={page === currentPage ? 'active' : ''}>
                                    <span
                                        {...getPageItemProps({
                                            pageValue: page,
                                            onPageChange: this.props.onChangePage
                                        })}
                                    >
                                        {page}
                                    </span>
                                </li>
                            );
                        })}

                        {hasNextPage && (
                            <li>
                                <span
                                    {...getPageItemProps({
                                        pageValue: nextPage,
                                        onPageChange: this.props.onChangePage
                                    })}
                                >
                                    {'>'}
                                </span>
                            </li>
                        )}

                        <li>
                            <span
                                {...getPageItemProps({
                                    pageValue: totalPages,
                                    onPageChange: this.props.onChangePage
                                })}
                                ref={x => this.elLastPageBtn = x}
                            >
                                last
                                    </span>
                        </li>
                    </ul>
                )}
        </Pagination>
    }
}