import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Divider from '@mui/material/Divider';

function valuetext(value) {
  return `${value} Einheiten`;
}

const marks = [{value: 1,label: '1.0',}, {value: 1.25,label: '1.25',}, {value: 1.5,label: '1.5',}, {value: 1.75,label: '1.75',}, {value: 2,label: '2.0',},];

export const Sidebar = ({focus, size, setSize}) => {

  return (
  <aside className="aside">
    <Card>
      <CardContent>
          {focus.d ? (
          <>
            <Typography variant="h5">Erdbeben im Detail</Typography>
            <Typography variant="body2">Lage: {focus.d.properties?.place ?? ""}</Typography>
            <Typography variant="body2">Epizentrum: {focus.d.geometry?.coordinates?.[1] ?? ""}, {focus.d.geometry?.coordinates?.[0] ?? ""}</Typography>
            <Typography variant="body2">Tiefe: {focus.d.geometry?.coordinates?.[2] ?? ""} km</Typography>           
            <Typography variant="body2">Stärke: {focus.d.properties?.mag ?? ""}</Typography>
            <Typography variant="body2">Zeitpunkt: {focus.d.properties?.time ? new Date(focus.d.properties.time).toLocaleString("de-CH"):""}</Typography>
          </>
          ) : (
          <Typography variant="body2">Klicke auf einen Marker und dann auf „Mehr Details“.</Typography>
          )}
      </CardContent>
    </Card>
    <Divider />
    <Box sx={{ width: 200, padding: 2}}>
      Darstellunggrösse der Erdbebenstärke
      <Slider
       aria-label="Grösse Erdbebenstärke"
       defaultValue={1}
       getAriaValueText={valuetext}
       valueLabelDisplay="auto"
       shiftStep={0.25}
       step={0.25}
       min={1}
       max={2}
       marks={marks}
       value={size}
       onChange={(e, size) => setSize(size)}
     />
   </Box>
  </aside>
  );
}

  
