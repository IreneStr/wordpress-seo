import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Results from "./Results";
import UpsellBox from "../UpsellBox";
import { Collapsible } from "yoast-components/composites/Plugin/Shared/components/Collapsible";
import KeywordInput from "../../containers/KeyWordInput";

const AnalysisHeader = styled.span`
	font-size: 1em;
	font-weight: bold;
	margin: 1.5em 0 1em;
	display: block;
`;

const ExplanationText = styled.p`
`;

const AddSynonyms = styled.a`
`;

/**
 * Redux container for the seo analysis.
 */
class SeoAnalysis extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Collapsible
					title="Focus keyword analysis"
				>
					<ExplanationText>
						A focus keyword is the term (or phrase) you'd like to be found with in search engines.
						Enter it below to see how you can improve your text for this term. <a href="#">Learn more about the Keyword Analysis</a>
					</ExplanationText>
					<KeywordInput
						id="focus-keyword-input"
					/>
					<AddSynonyms
						href="#"
						onClick={ () => { jQuery( ".wpseo-keyword-synonyms" ).click(); } }
					>
						+ Add synonyms
					</AddSynonyms>
					<AnalysisHeader>
						Analysis results:
					</AnalysisHeader>
					<Results
						showLanguageNotice={ false }
						results={ this.props.results }
						marksButtonClassName="yoast-tooltip yoast-tooltip-s"
						marksButtonStatus={ this.props.marksButtonStatus }
					/>
				</Collapsible>
				<Collapsible
					title="Add another keyword"
				>
					<UpsellBox
						benefits={ this.props.upsell.benefits }
						infoParagraphs={ this.props.upsell.infoParagraphs }
						upsellButtonText={ this.props.upsell.buttonText }
						upsellButton={ {
							href: this.props.upsell.buttonLink,
							className: "button button-primary",
							"aria-labelledby": "label-id",
						} }
						upsellButtonLabel={ this.props.upsell.buttonLabel }
					/>
				</Collapsible>
			</React.Fragment>
		);
	}
}

SeoAnalysis.propTypes = {
	results: PropTypes.array,
	marksButtonStatus: PropTypes.string,
	hideMarksButtons: PropTypes.bool,
	upsell: PropTypes.shape( {
		benefits: PropTypes.array,
		infoParagraphs: PropTypes.array,
		buttonLink: PropTypes.string,
		buttonText: PropTypes.string,
		buttonLabel: PropTypes.string,
	} ),
};

/**
 * Maps redux state to SeoAnalysis props.
 *
 * @param {Object} state The redux state.
 * @param {Object} ownProps The component's props.
 *
 * @returns {Object} Props that should be passed to SeoAnalysis.
 */
function mapStateToProps( state, ownProps ) {
	const marksButtonStatus = ownProps.hideMarksButtons ? "disabled" : state.marksButtonStatus;

	let results = null;
	if( state.analysis.seo[ state.focusKeyword ] ) {
		results = state.analysis.seo[ state.focusKeyword ].results;
	}

	return {
		results,
		marksButtonStatus,
	};
}

export default connect( mapStateToProps )( SeoAnalysis );
