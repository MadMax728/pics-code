import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import * as images from "../../../../lib/constants/images";
import { Translations } from "../../../../lib/translations";

const tabs = [
    {
        id: '1',
        index: 1,
        title: Translations.message_module.type.subscribed,
        icon: '',
        image: images.grey_person,
        value: Translations.message_module.type.subscribed,
    },
    {
        id: '2',
        index: 2,
        title: Translations.message_module.type.unknown,
        icon: '',
        image: images.grey_person,
        value: Translations.message_module.type.unknown,
    },
    {
        id: '3',
        index: 3,
        title: Translations.message_module.type.like_you,
        icon: '',
        image: images.grey_person,
        value: Translations.message_module.type.like_you,
    },
    {
        id: '4',
        index: 4,
        title: Translations.message_module.type.companies,
        icon: '',
        image: images.grey_person,
        value: Translations.message_module.type.companies,
    }
]
const MLeftTabs = (
    { 
        handleTypeClick,
        activeIndex
    }) => {
        const mTabs = () => {
            return tabs.map((tab, key) => (
                <div
                    role="button"
                    key={tab.id}
                    tabIndex={tab.index}
                    onKeyDown={handleTypeClick}
                    className={classnames("menu-item", { "active": activeIndex === tab.id })}
                    onClick={handleTypeClick}
                    data-id={tab.id}
                    data-value={tab.value}
                    >
                    <img src={tab.image} alt={"user"} />
                    <br />
                    {tab.title}
                </div>
            ));
        };
        return (
            <div className="messages-menu">
                {mTabs()}
            </div>
        )
};

MLeftTabs.propTypes = {
    activeIndex: PropTypes.string.isRequired,
    handleTypeClick: PropTypes.func.isRequired,
};

MLeftTabs.defaultProps = {
    activeIndex: 1
};

export default MLeftTabs;