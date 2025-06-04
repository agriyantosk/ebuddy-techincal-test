import { Card, Stack } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "../atoms/TextField";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";
import { IUser } from "../../../../backend-repo/entities/user";

type UserInfoCardProps = {
  userData: IUser;
  isEditing: boolean;
  onEditToggle: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const UserInfoCard = ({ props }: { props: UserInfoCardProps }) => {
  const { userData, isEditing, onEditToggle, onChange, onSubmit } = props;

  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <Stack spacing={2}>
        <CardContent>
          <Typography
            text={`USER ID: ${userData.uid}`}
            variant="h5"
            component="div"
          />
        </CardContent>

        <CardContent>
          {isEditing ? (
            <Stack spacing={2}>
              <TextField
                name="totalAverageWeightRatings"
                label="Average Rating"
                value={userData.totalAverageWeightRatings}
                onChange={onChange}
                type="number"
              />
              <TextField
                name="numberOfRents"
                label="Number of Rents"
                value={userData.numberOfRents}
                onChange={onChange}
                type="number"
              />
              <TextField
                name="recentlyActive"
                label="Recently Active (Epoch)"
                value={userData.recentlyActive}
                onChange={onChange}
                type="number"
              />
            </Stack>
          ) : (
            <Stack spacing={3}>
              <Typography
                text={`Rating: ${userData.totalAverageWeightRatings}`}
                sx={{ color: "text.secondary" }}
              />
              <Typography
                text={`Rents: ${userData.numberOfRents}`}
                sx={{ color: "text.secondary" }}
              />
              <Typography
                text={`Last Active: ${userData.recentlyActive}`}
                sx={{ color: "text.secondary" }}
              />
            </Stack>
          )}
        </CardContent>

        <CardActions sx={{ justifyContent: "center" }}>
          {isEditing ? (
            <Button title="Save" onClick={onSubmit} type="submit" />
          ) : (
            <Button title="Edit" onClick={onEditToggle} type="button" />
          )}
        </CardActions>
      </Stack>
    </Card>
  );
};

export default UserInfoCard;
