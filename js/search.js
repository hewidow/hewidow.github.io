function searchAppear()
{
    if (document.getElementById("searchhh").value!="")
    {
        searchhh.style.width="50%";
        searchhh.style.borderTopRightRadius="0px";
        searchhh.style.borderBottomRightRadius="0px";
        searchhh.style.borderRight="0px";
        searchButton.style.opacity="1";
    }
}
function searchAppear2()
{
    if (document.activeElement.id!="searchhh")
    {
        if (document.getElementById("searchhh").value=="")
        {
        searchhh.style.width="150px";
        searchhh.style.borderTopRightRadius="5px";
        searchhh.style.borderBottomRightRadius="5px";
        searchhh.style.borderRight="1px solid grey";
        searchButton.style.opacity="0";
        }
    }
}
function searchAppear3()
{
        searchhh.style.width="50%";
        searchhh.style.borderTopRightRadius="0px";
        searchhh.style.borderBottomRightRadius="0px";
        searchhh.style.borderRight="0px";
        searchButton.style.opacity="1";
}