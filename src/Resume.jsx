import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet,
    Image
} from "@react-pdf/renderer";
import moment from "moment";
// const POSTER_PATH = "https://image.tmdb.org/t/p/w154";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff"
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    resumeContainer: {
        backgroundColor: "#f6f6f5",
        display: "flex",
        flexDirection: "row",
        padding: 5
    },
    resumeDetails: {
        display: "flex",
        marginLeft: 5
    },
    resumeTitle: {
        fontSize: 15,
        marginBottom: 10
    },
    resumeOverview: {
        fontSize: 10
    },

    image: {
        height: 200,
        width: 150
    },
    subtitle: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: 150,
        alignItems: "center",
        marginBottom: 12
    },
    vote: {
        display: "flex",
        flexDirection: "row"
    },
    rating: {
        height: 10,
        width: 10
    },
    vote_text: {
        fontSize: 10
    },
    vote_pop: {
        fontSize: 10,
        padding: 2,
        backgroundColor: "#61C74F",
        color: "#fff"
    },
    vote_pop_text: {
        fontSize: 10,
        marginLeft: 4,
        marginRight: 4
    },
    overviewContainer: {
        minHeight: 110
    },
    detailsFooter: {
        display: "flex",
        flexDirection: "row"
    },
    lang: {
        fontSize: 8,
        fontWeight: 700
    },
    vote_average: {
        fontSize: 8,
        marginLeft: 4,
        fontWeight: "bold"
    },
    header: {
        fontSize: 22,
        height: 30,
        textAlign: "center",
        color: "navy"
    },
    footer: {
        fontSize: 10,
        marginBottom: 5
    },
    headline: {
        fontSize: 20
    }
});

export function ResumePdf(props) {
    console.log("pdf props", props.data.experiences);
    return (
        <Document>
            <Page style={styles.page}>
                <View fixed styles={styles.header}>
                    <Text> Resume of {props.data.full_name}</Text>
                </View>
                <View style={styles.subtitle}>
                    <View style={styles.vote}>
                        {/* <Image source={props.data.photo_url} style={styles.rating} /> */}
                        {/* <Image source={
                            props.data.photo_url !== null
                                ? props.data.photo_url
                                : "profileicon.png"
                        } /> */}
                    </View>
                </View>
                <Text style={styles.headline}>Experiences </Text>
                {props.data
                    ? props.data.experiences?.map((a, index) => {
                        return (
                            <View key={index} style={styles.resumeContainer}>
                                <Text style={styles.resumeTitle}>{index + 1}. {a.company}</Text>
                                <View style={styles.resumeDetails}>
                                    <Text style={styles.resumeTitle}>{a.location}</Text>
                                    <View style={styles.overviewContainer}>
                                        <Text style={styles.resumeOverview}>{a.overview}</Text>
                                    </View>
                                </View>
                            </View>

                        );
                    })
                    : ""}

                {/* education */}
                <Text style={styles.headline}>Education </Text>
                {props.data
                    ? props.data.educations?.map((a, index) => {
                        return (
                            <View key={index} style={styles.resumeContainer}>

                                <Text style={styles.resumeTitle}>{index + 1}. {a.school}</Text>
                                <View style={styles.resumeDetails}>
                                    <Text style={styles.resumeTitle}>{a.location}</Text>
                                    <View style={styles.subtitle}>
                                        <View style={styles.vote}>
                                            <Text style={styles.vote_pop}> From :{a.start_at}</Text>
                                        </View>
                                        <View style={styles.vote}>
                                            <Text style={styles.vote_pop}> To: {a.end_at}</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        );
                    })
                    : ""}
                <View fixed styles={styles.footer}>
                    <Text>End of Page</Text>
                </View>
            </Page>
        </Document >
    );
}
