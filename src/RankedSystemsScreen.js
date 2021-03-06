import React from 'react';
import PageSection from './PageSection';
import {FootnoteGenerator} from './FootnoteGenerator';

const RankedSystemsScreen = React.forwardRef((props, ref) => {
    return (
        <PageSection className="text-left">
            <h1>Ranked Voting Systems: Tradeoffs and Options Abound</h1>

            <p>
                There are an entire class of preferential voting systems - Condorcet Methods - that satisfy the Condorcet Criterion.
            </p>

            <p>
                <b> "Copeland's method"</b>,
                <FootnoteGenerator
                    desc="More on the Copland method can be found below."
                    link="https://en.wikipedia.org/wiki/Copeland%27s_method"
                    ref={ref} setFootnote={props.setFootnote}
                />
                for example, calculates the pairwise victories and pairwise defeats for each candidate.
                Using these values, each candidate receives a score corresponding to their victories minus their defeats;
                the candidate with the highest score wins.
                While Copeland's method satisfies both the Condorcet Criterion and is Smith Efficient, it often produces a tie when there are three-way Smith cycles.
                This poses a practical concern for this technique.
            </p>

            <p>
                <b>"Kemeny–Young's method"</b>
                <FootnoteGenerator
                    desc="More on the Kemeny-Young method can be found below."
                    link="https://en.wikipedia.org/wiki/Kemeny%E2%80%93Young_method"
                    ref={ref} setFootnote={props.setFootnote}
                />
                is another Condorcet Method, one that assigns scores to each possible sequence of preferences that voters could provide.
                Those scores are then compared, based on the voting results, and the sequence with the highest possible score is chosen.
                The most-preferred candidate in that sequence is then chosen as the overall winner.
                This method, in addition to being more mathematically complicated than previous approaches, is algorithmically NP-hard.
                It's unlikely that there is a polynomial-time algorithm to find a victor for an arbitrary election with 'n' candidates, posing implementation and scaling concerns.
            </p>

            <p>
                These are only a few of the many different Condorcet Methods, and each one has significant research dissecting its pros and cons.
                There are also some Ranked Voting systems that aren't Condorcet Methods.
                Arguably one of the most popular Ranked Voting systems, <b>"Instant Runoff Voting"/"Ranked Choice Voting"</b>,
                <FootnoteGenerator
                    desc="More on IRV/RCV can be found below"
                    link="https://www.fairvote.org/rcv"
                    ref={ref} setFootnote={props.setFootnote}
                />
                fails in this regard.
                But what IRV lacks in there, it gains in simplicity.
                The algorithm is as follows:
            </p>

            <ol>
                <li>If there is a majority candidate, select them.</li>
                <li>Else, remove the candidate in last place, reallocating their votes to each voter's next-in-line preference.</li>
                <li>Repeat 1-2 until a candidate is selected.</li>
            </ol>

            <div className="row d-flex align-items-center">
                <div className="col-lg-4">
                    <p>
                        A concern with IRV, however, is that the elimination of an outlier can result in a temporary boost of a suboptimal candidate.
                        This can occasionally knock overall front runners into last place and remove them from the race.
                        That's how IRV can fail the Condorcet Criterion.
                        Here is an example where, after the arrival of <span className="text-secondary">Sapphire Sally</span> and a shifting of the political landscape, <span className="text-primary">Calista</span> loses to <span className="text-primary">Rosie</span>, who she could have beaten 1-on-1 thanks to <span className="text-secondary">Bennie's</span> shifted supporters.
                    </p>

                    <p>
                        This permutation on the Spoiler Effect is not just mathematically possible, but much like the Singapore example from earlier has happened in recent history.
                        Specifically, Burlington, Vermont's 2009 mayoral election saw this outcome, inspiring the city to repeal IRV and reinstate FPTP.
                        <FootnoteGenerator
                            desc="The fact that the victor, Bob Kiss, was neither the Condorcet winner nor the plurality winner multiplied the controversy. IRV critics seized this outcome as an opportunity to highlight some of RCV/IRV's shortcomings. More details on the fallout of this election can be found below."
                            link="https://www.fairvote.org/rcv"
                            ref={ref} setFootnote={props.setFootnote}
                        />
                    </p>
                </div>
                <div className="col-lg-8">
                    <table className="table table-striped table-responsive-lg">
                        <caption>Sally Shifts The IRV Election; Calista, Our Condorcet Winner, Loses</caption>
                        <thead className="thead-dark">
                            <tr>
                                <th>Candidates</th>
                                <th>Original Tally</th>
                                <th>1st Change</th>
                                <th>New Tally</th>
                                <th>2nd Change</th>
                                <th>New Tally</th>
                                <th>Winner</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Rosie</th>
                                <td>24</td>
                                <td>+8</td>
                                <td>32</td>
                                <td>+31</td>
                                <td>63</td>
                                <td className="font-weight-bold">Rosie</td>
                            </tr>
                            <tr>
                                <th scope="row">Bennie</th>
                                <td>30</td>
                                <td>+7</td>
                                <td>37</td>
                                <td>0</td>
                                <td>37</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Calista</th>
                                <td>31</td>
                                <td>0</td>
                                <td className="font-weight-bold">31</td>
                                <td>-31</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">Sally</th>
                                <td className="font-weight-bold">15</td>
                                <td>-15</td>
                                <td>0</td>
                                <td>0</td>
                                <td>0</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <p>
                But let's back up a second - why are we even discussing methods that don't meet our Condorcet Criterion?
                As we recognized when we began this exploration, it's critical that our analysis of voting systems be grounded in certainty.
                Precise analysis permits objective, nonpartisan discussions about different voting algorithms, their pros, and their cons.
                But while not meeting the Condorcet Criterion is a con, failing in that regard doesn't disqualify a system unilaterally.
            </p>

            <p>
                Analysis does not dictate which tradeoffs we should make.
                It can only inform them.
            </p>
        </PageSection>
    );
});

export default RankedSystemsScreen;
