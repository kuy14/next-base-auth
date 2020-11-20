import { Button, Form, Grid, TextArea } from "semantic-ui-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import TeamModal from "./modal";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import { setEvent, setTeamGroup } from "../../lib/slices/eventSlice";

export const CreateProject = () => {
  const dispatch = useDispatch();
  const localizer = momentLocalizer(moment);
  const event = useSelector((state) => state.events.events);

  //input state
  const [projectId, setProjectId] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectBudget, setProjectBudget] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );
  const [endDate, setEndDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  );

  const onSlotChange = (slotInfo) => {
    let startDate = moment(slotInfo.start.toLocaleString()).format(
      "YYYY-MM-DDm:ss"
    );
    let endDate = moment(slotInfo.end.toLocaleString()).format(
      "YYYY-MM-DDm:ss"
    );
    console.log(startDate);
    console.log(endDate);
  };

  const onCreateSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setEvent({
        id: projectId,
        user: "test",
        title: projectTitle,
        start: startDate,
        end: endDate,
        desc: projectDescription,
        budget: projectBudget,
        type: projectType,
      })
    );
    e.target.reset();
  };

  return (
    <>
      <Grid container columns={1} relaxed stackable>
        <Grid.Column>
          <div>
            <h3> Create Project</h3>
            <Calendar
              localizer={localizer}
              events={event}
              selectable
              onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
              defaultDate={new Date()}
              startAccessor="start"
              endAccessor="end"
              style={{ minHeight: "500px" }}
            />
          </div>
        </Grid.Column>
      </Grid>
      <Form onSubmit={onCreateSubmit}>
        <Grid container columns={2} relaxed stackable>
          <Grid.Column>
            <Form.Input
              fluid
              icon="user"
              name="projectId"
              iconPosition="left"
              placeholder="Project Id"
              onChange={(event) => {
                setProjectId(event.target.value);
              }}
            ></Form.Input>
          </Grid.Column>
          <Grid.Column>
            <Form.Input
              fluid
              icon="file text"
              name="projectName"
              iconPosition="left"
              placeholder="Project Name"
              onChange={(event) => {
                setProjectTitle(event.target.value);
              }}
            ></Form.Input>
          </Grid.Column>

          <Grid.Column>
            <Form.Input
              fluid
              icon="tag"
              name="projectType"
              iconPosition="left"
              placeholder="Project Type"
              onChange={(event) => {
                setProjectType(event.target.value);
              }}
            ></Form.Input>
          </Grid.Column>
          <Grid.Column>
            <Form.Input
              fluid
              icon="money"
              name="projectBudget"
              iconPosition="left"
              placeholder="Project Budget"
              onChange={(event) => {
                setProjectBudget(event.target.value);
              }}
            ></Form.Input>
          </Grid.Column>
        </Grid>
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <TextArea
              placeholder="Event Description"
              onChange={(event) => {
                setProjectDescription(event.target.value);
              }}
            />
          </Grid.Column>
        </Grid>
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <h5>Event Date</h5>
          </Grid.Column>
        </Grid>
        <Grid container columns={2} relaxed stackable>
          <Grid.Column>
            <Form.Field>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                selectsStart
                startDate={startDate}
                minDate={new Date()}
                endDate={endDate}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Form.Field>
          </Grid.Column>
          <Grid.Column>
            <Form.Field>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                showTimeSelect
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Form.Field>
          </Grid.Column>
        </Grid>
        <Grid container columns={1} relaxed stackable>
          <Grid.Column>
            <h5>Teams</h5>
          </Grid.Column>
          <Grid.Column>
            <TeamModal />
          </Grid.Column>
        </Grid>
        <Grid container column={1} relaxed stackable>
          <Grid.Column>
            <Button primary style={{ float: "right" }}>
              Create Project
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </>
  );
};

export const DetailProject = () => {
  return <h1> Detail Project</h1>;
};
