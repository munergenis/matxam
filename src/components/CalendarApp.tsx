const CalendarApp = () => {
  return (
    <div className="calendar-app">
      <div className="calendar">
        <h1 className="heading">Calendar</h1>

        <div className="navigate-date">
          <h2 className="month">May,</h2>
          <h2 className="year">2025</h2>
          <div className="buttons">
            <button>&lt;</button>
            <button>&gt;</button>
          </div>
        </div>

        <div className="weekdays">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>

        <div className="days">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
        </div>
      </div>

      <div className="events">
        <div className="event-popup">
          <div className="range-input">
            <div className="event-popup-range">Range</div>
            <select
              className="range"
              name="range"
            >
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="night">Night</option>
            </select>
          </div>

          <div className="title input">
            <div className="event-popup-title">Title</div>
            <input
              className="title"
              name="title"
              type="text"
              placeholder="Enter a title"
              maxLength={60}
            />
          </div>

          <button className="event-popup-btn">Add event</button>
          <button className="close-event-popup">X</button>
        </div>

        <div className="event">
          <div className="event-date-wrapper">
            <div className="event-date">May 15, 2025</div>
            <div className="event-range">Afternoon</div>
          </div>
          <div className="event-title">Descent campaign</div>
          <div className="event-buttons">
            <button>✏️</button>
            <button>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalendarApp;
