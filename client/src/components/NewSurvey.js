import React from "react";
import SurveyForm from "./surveys/SurveyForm";
import SurveyFormReview from "./surveys/SurveyFormReview";
import { reduxForm } from "redux-form";

const useToggle = (initialState) => {
    const [isToggled, setIsToggled] = React.useState(initialState);
  
    // put [setIsToggled] into the useCallback's dependencies array
    // this value never changes so the callback is not going to be ever re-created
    const toggle = React.useCallback(
      () => setIsToggled(state => !state),
      [setIsToggled],
    );
  
    return [isToggled, toggle];
}

const NewSurvey = () => {
    const [showReview, toggle] = useToggle(false);

    function renderContent() {
        if (showReview) {
            return <SurveyFormReview 
                onCancel={toggle}
            />;
        }
        return <SurveyForm onSurveySubmit={toggle} />;
    }

    return (
        <div>
            {renderContent()}
        </div>
    );

}

export default reduxForm({
    form: 'surveyForm'
})(NewSurvey);