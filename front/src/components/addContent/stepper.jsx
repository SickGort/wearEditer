import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import ImageInput from '../../containers/addContent/imageInput';
import { DivModalStatus } from '../../style/common/addContent';
import { DivModalImagePrev, ImgModalImagePrev } from '../../style/common/modal';
import SnackBar from './snackBars';

const useStyles = {
  root: {
    width: '100%',
  },
  backButton: {
    // marginRight: theme.spacing(1),
  },
  instructions: {
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1),
  }
};

function getSteps() {
  return ['Select Photo...', 'Add Groups', 'Add Tags'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select Photo...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Uknown stepIndex';
  }
}

const partList = ["Cap", "UpperBody", "LowerBody", 'Socks', 'Shoes'];

class Setting extends React.Component {


  createContent() {
    const {
      addContent, classes, changeTagName,
      crateTag, deleteTag, set, recognition,
    } = this.props;
    const { step, tags, candidate, data } = addContent;
    switch (step) {
      case 0:
        return (
          <ImageInput />
        );
      case 1:
        return partList.map((part) => (
          <Chip
            label={part}
            className={classes.chip}
            // onClick={() => (!isChecked) ? changeList('tags', tag) : clearChangeList('tags', tag)}
            color={''}
            clickable={true}
          />
        ));

      case 2:
        return (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={recognition}
            >
              Auto Recognition
            </Button>
            <br />
            <Input
              placeholder="Add Tag"
              // className={classes.input}
              inputProps={{
                'aria-label': 'description',
              }}
              onChange={e => changeTagName(e.target.value)}
              value={candidate}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={crateTag}
            >
              Add
            </Button>
            <br />
            <div>
              {tags.map((tag) => (
                <Chip
                  label={tag}
                  className={classes.chip}
                  color={'primary'}
                  clickable={true}
                  onDelete={() => deleteTag(tag)}
                />
              ))}
            </div>
            <SnackBar
              status='success'
              message='move success'
            />
          </div>
        );

      default:
        break;
    }
  }

  render() {
    const { classes, addContent, moveAddContentModal } = this.props;
    const { step } = addContent;
    const steps = getSteps();

    return (
      <div className={classes.root}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {step === steps.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={() => moveAddContentModal(0)}>Reset</Button>
            </div>
          ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(step)}</Typography>
                {this.createContent()}
                <DivModalStatus>
                  <Button
                    disabled={step === 0}
                    onClick={() => moveAddContentModal(step - 1)}
                    className={classes.backButton}
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={() => moveAddContentModal(step + 1)}>
                    {step === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </DivModalStatus>
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Setting);
