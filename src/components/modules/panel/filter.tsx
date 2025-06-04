/**
 * @name filter.tsx
 * @description 絞り込み機能
 */
"use client";
import { useState } from 'react';
import { Headline } from "@/components/modules/headline/headline";
import Datepicker from './datepicker';
import "./styles/filter.scss";

export default function Filter() {
    const [values, setValues] = useState({ adult: 0, child: 0 });

    const handleValueChange = (type: 'adult' | 'child', value: number) => {
        setValues((prev) => ({ ...prev, [type]: value }));
    };

    const handleIncrement = (type: 'adult' | 'child') => {
        setValues((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    };

    const handleDecrement = (type: 'adult' | 'child') => {
        setValues((prev) => ({ ...prev, [type]: Math.max(0, prev[type] - 1) }));
    };

    return (
        <form className="c-filter" method="get">
            <div className="c-filter__form">
                <div className="form-item is-item-stay">
                    <Headline design="01" hlLevel="p">宿泊数</Headline>
                    <div className="form-item__input">
                        <label className="input-item">
                            <input type="checkbox" name="stay[]" value={3} className="input" />
                            <span className="label"><span>3</span>泊</span>
                        </label>
                        <label className="input-item">
                            <input type="checkbox" name="stay[]" value={4} className="input" />
                            <span className="label"><span>4</span>泊</span>
                        </label>
                        <label className="input-item">
                            <input type="checkbox" name="stay[]" value={5} className="input" />
                            <span className="label"><span>5</span>泊</span>
                        </label>
                    </div>
                </div>
                <div className="form-item is-item-date">
                    <Headline design="01" hlLevel="p">出発日</Headline>
                    <div className="form-item__input">
                        <label className="input-item">
                            <Datepicker />
                            <span className="icon">
                                <svg className="i-calendar">
                                    <use href="#i-calendar"></use>
                                </svg>
                            </span>
                        </label>
                    </div>
                </div>
                <div className="form-item is-item-people">
                    <Headline design="01" hlLevel="p">人数</Headline>
                    <div className="form-item__input">
                        <dl className="input-item">
                            <dt>大人</dt>
                            <dd>
                                <button type='button' className="minus" onClick={() => handleDecrement('adult')} disabled={values.adult === 0}>-</button>
                                <input type="text" name="adult" value={values.adult} onChange={(e) => handleValueChange('adult', Number(e.target.value))} className='input' disabled />
                                <button type='button' className="plus" onClick={() => handleIncrement('adult')}>+</button>
                            </dd>
                        </dl>
                        <dl className="input-item">
                            <dt>子供<span>2歳〜12歳</span></dt>
                            <dd>
                                <button type='button' className="minus" onClick={() => handleDecrement('child')} disabled={values.child === 0}>-</button>
                                <input type="text" name="child" value={values.child} onChange={(e) => handleValueChange('child', Number(e.target.value))} className='input' disabled />
                                <button type='button' className="plus" onClick={() => handleIncrement('child')}>+</button>
                            </dd>
                        </dl>
                        <p className='attention'>
                            <a href="" className='uline-r'>
                                <span className="icon">
                                    <svg className="i-question">
                                        <use href="#i-question"></use>
                                    </svg>
                                </span>
                                <span className="label line">お子様のご予約について</span>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="form-item is-item-submit">
                    <div className="form-item__input">
                        <button type="submit">絞り込む</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
