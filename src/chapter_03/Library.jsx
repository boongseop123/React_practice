import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/>
            <Book name="두번 만난 자바" numOfPage={200}/>
            <Book name="처음 만난 리액트" numOfPage={560}/>
        </div>
    );
}

export default Library;