import React from "react";
import RoomBlock from "./RoomBlock";

function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no room matched your search</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <RoomBlock key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
export default RoomsList;
