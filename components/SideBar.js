import SideBarList from "./SideBarList";

export default function SideBar({ dict }) {
    const { trending, newRelease, commingSoon, favourite, watchLater } = dict;

    return (
        <aside>
            <ul className="space-y-2">
                <SideBarList logo="trending" title={trending} isactive />
                <SideBarList logo="newRelease" title={newRelease} />
                <SideBarList logo="commingSoon" title={commingSoon} />
                <SideBarList logo="favourite" title={favourite} />
                <SideBarList logo="watchLater" title={watchLater} />
            </ul>
        </aside>
    );
}
