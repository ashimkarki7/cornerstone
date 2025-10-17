import { Fragment, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderStyles from './Header.module.scss';
import {
    PhoneSvg,
    LogoSvg,
    HeartSvg,
    ViewBoxSvg,
    SearchIconSvg,
    DropDownSvg,
} from '@assets/svg';
import Button from '@/components/Button/Button.tsx';
import DropdownComponent from '@components/Dropdown/Dropdown.tsx';


import type { IObjectLiteral } from '@common/types.ts';

export const Header = () => {
    document.documentElement.setAttribute('data-theme', 'light');
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState({
        name: '',
        isOpen: false,
    });

    const renderDropDown = useCallback(
        (options: any) => (
            <Fragment>
                {options?.map((optionItem: IObjectLiteral) => (
                        <li
                            style={{
                                color: optionItem.path === location.pathname ? '#FF8000' : '',
                            }}
                            key={optionItem.key}
                        >
                            {optionItem?.name}
                        </li>
                    ))}
            </Fragment>
        ),
        [location]
    );

    return (
        <header id="Header" className={HeaderStyles.headerContainer}>
            <div id="primary-header" className={HeaderStyles.header_banner}>
                <div
                    style={{
                        minHeight: '24px',
                        alignItems: 'flex-start',
                        display: 'flex',
                        gap: '0.3em',
                    }}
                >
          <span>
            <PhoneSvg />
          </span>
                    <span
                        style={{
                            fontFamily: 'Sora, sans-serif',
                            fontSize: '14px',
                            fontWeight: '400',
                            display: 'contents',
                        }}
                    >
            +9779818246138
          </span>
                </div>

                <div style={{ minHeight: '24px' }}>
                    Online DICOM Viewer
                </div>

                <div
                    id="HeaderOptions"
                    style={{
                        minHeight: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                        gap: '1em',
                        fontSize: '14px',
                        fontWeight: '500',
                    }}
                >


                    <div style={{ position: 'relative', display: 'inline-block' }}>
                        <div
                            id="settings"
                            onClick={() =>
                                setDropdownOpen({
                                    name: 'settings',
                                    isOpen:
                                        dropdownOpen.name !== 'settings' || !dropdownOpen.isOpen,
                                })
                            }
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.1em',
                                cursor: 'pointer',
                            }}
                        >
                            Settings
                            <DropDownSvg />
                        </div>
                        {dropdownOpen.name === 'settings' && dropdownOpen.isOpen && (
                            <DropdownComponent
                                options={[
                                    { label: 'My profile', id: 'profile' },
                                    { label: 'Uploader', id: 'uploader' },
                                    { label: 'Logout', id: 'logout' },
                                ]}
                                dropdownOpen={dropdownOpen}
                                setDropdownOpen={setDropdownOpen}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div id="secondary-header" className={HeaderStyles.header_menu}>
                <div className={HeaderStyles.main_logo}>
                    <LogoSvg />
                    <div id="menu-items" className={HeaderStyles.menu_item}>
                        <nav>
                            <ul
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'nowrap',
                                }}
                            >
                                <li onClick={() => navigate('/')}>Home</li>
                                <li onClick={() => navigate('/')}>About</li>
                                <li onClick={() => navigate('/')}>Contact</li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div id="HeaderOptions" className={HeaderStyles.actions}>
                    <div className={HeaderStyles.search_input_container}>
                        <input
                            className={HeaderStyles.search_input}
                            placeholder="Search..."
                            id="search_input"
                            anchor-name="search-input"
                        />
                        <Button
                            ariaLabel="Search"
                            anchor-target="search-input"
                            hasIconOnly={true}
                            title={<SearchIconSvg />}
                            onClickHandler={() => {
                                console.log('search clicked');
                            }}
                            className={HeaderStyles.btnSearch}
                        />
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.1em',
                            cursor: 'pointer',
                        }}
                    >
                        <HeartSvg />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ViewBoxSvg />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ position: 'relative', display: 'inline-block' }}>
                            <div
                                className={HeaderStyles.bar_icon}
                                onClick={() =>
                                    setDropdownOpen({
                                        name: 'menu',
                                        isOpen:
                                            dropdownOpen.name !== 'menu' || !dropdownOpen.isOpen,
                                    })
                                }
                            >
                                <span />
                                <span />
                                <span />
                                {dropdownOpen.name === 'menu' && dropdownOpen.isOpen && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            right: '133px',
                                            top: '11px',
                                        }}
                                    >
                                        <DropdownComponent
                                            renderDropDown={renderDropDown}
                                            options={[
                                                { key: 'My profile', name: 'profile' },
                                                { key: 'Uploader', name: 'uploader' },
                                                { key: 'Logout', name: 'logout' },
                                            ]}
                                            dropdownOpen={dropdownOpen}
                                            setDropdownOpen={setDropdownOpen}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
