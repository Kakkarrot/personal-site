/*
	Author: Willie Li
	
	Compiling Instructions: 
		1. Ensure that input.txt is in the same directory. 
		2. Compile the program using "g++ deadLockDetectionAlgorithm.cpp -o dda" without quotes. 
		3. Run the executable using "./dda input.txt" without quotes. 
	
*/

#include <iostream>
#include <string>
#include <cstring>
#include <fstream>
#include <sstream>
#include <unordered_map>
#include <vector>
#include <map>

using namespace std;

struct myEdge{
	int start, finish;
};

unordered_map<int, unordered_map<int, int> > outgoingEdges; //node and adjacent neighbors
unordered_map<int, unordered_map<int, int> > incomingEdges; //node and adjacent neighbors
vector<int> removeSoon; //nodes that have no incoming edges


void printVector(vector<int> v);
void printMap(unordered_map<int, unordered_map<int, int> > map);
void printMap (unordered_map<int, int> map);
void getRemoves();
void completeRemoval();
void clearStructures();
void deadlock();

int main(int argc, char ** argv) {
	if (argc != 2) {
		printf("Please specify the input file. \n");
		exit(-1);
	}
	ifstream in;
	in.open(argv[1]);

	int offset = 1000000;
	int process, resource; 
	string currentLine, arrow;
	stringstream ss;
	
	//reading in the input file
	while (getline(in, currentLine)) {
		/*
			multiple test cases can be handled at once, up to a maximum of 20
			they must be separated with a # and each case can have a maximum of 100 000 edges
			once the end of an input is detected, then the algorithm will begin
			below is an example
			
			1 -> 2
			# end of case 1
			1 -> 2
			
		*/
		if (currentLine[0] == '#') {	
			while (true) {
				getRemoves();			//get the processes that are not deadlocked
				if (removeSoon.size() == 0) {
					deadlock();			//print out processes that are in a deadlock
					clearStructures();
					break;
				}
				completeRemoval();
			}
		}
		ss.str(currentLine);
		ss >> process;ss >> arrow;ss >> resource;
		resource += offset; //shifting the resource value
		ss.clear();
		
		//insert input into the graph
		if(arrow.find("->") != string::npos) { //process requests for a resource
			if (outgoingEdges.find(process) == outgoingEdges.end()){ //new process not already in graph
				outgoingEdges.insert(make_pair(process, unordered_map<int, int>()));
				outgoingEdges[process].insert(make_pair(resource, 0));
			} else { //existing process already in graph
				outgoingEdges[process].insert(make_pair(resource, 0));
			}
			if (incomingEdges.find(resource) == incomingEdges.end()){ //new resource not already in graph
				incomingEdges.insert(make_pair(resource, unordered_map<int, int>()));
				incomingEdges[resource].insert(make_pair(process, 0));
			} else { //existing resource already in graph
				incomingEdges[resource].insert(make_pair(process, 0));
			}
		} else { //process is holding the resource
			if (outgoingEdges.find(resource) == outgoingEdges.end()) { //new resource not already in graph
				outgoingEdges.insert(make_pair(resource, unordered_map<int, int>()));
				outgoingEdges[resource].insert(make_pair(process, 0));
			} else { //existing resource already in graph
				outgoingEdges[resource].insert(make_pair(process, 0));
			}
			if (incomingEdges.find(process) == incomingEdges.end()) { //new process not already in graph
				incomingEdges.insert(make_pair(process, unordered_map<int, int>()));
				incomingEdges[process].insert(make_pair(resource, 0));
			} else { //existing process already in graph
				incomingEdges[process].insert(make_pair(resource, 0));
			}
		}
	}
        while (true) {		//same code as before to handle the last test case if a file has multiple test cases
	        getRemoves();
                if (removeSoon.size() == 0) {
                	deadlock();
                        clearStructures();
                        break;
                }
                completeRemoval();
	}


}

//clears all data structures for the next test case
void clearStructures(){
	outgoingEdges.clear();
	incomingEdges.clear();
	removeSoon.clear();
}

//prints out all deadlocked processes
void deadlock(){
	cout << "Deadlocked processes: ";
	if (outgoingEdges.size() != 0) {
		map<int, unordered_map<int, int> > sorted (outgoingEdges.begin(), outgoingEdges.end());
		int i = 0;
		for (auto itr = sorted.begin(); itr != sorted.end(); ++itr) {
			if (itr->first < 1000000) {
				cout << itr->first << " ";
				i++;
                        if (i%10 == 0)
                                cout << '\n';
			}
		}
		cout << '\n';
	} else {
		cout << "none" << '\n';
	}
}

//removes the processes that have been identified to not be part of the deadlock
void completeRemoval(){
	unordered_map<int, int> :: iterator itr;
	for (int i = 0; i < removeSoon.size(); i++) {
		int node = removeSoon[i];
		for (itr = incomingEdges[node].begin(); itr != incomingEdges[node].end(); itr++) {
			int edge = itr->first;
			outgoingEdges[edge].erase(node);
			if (outgoingEdges[edge].size() == 0) { //no more outgoing edges
				outgoingEdges.erase(edge);
			}
		}
		incomingEdges.erase(node);
	}
	removeSoon.clear();
}

//only looks at incomingEdges and checks outgoingEdges
//find the processes that cannot be part of the deadlock
void getRemoves() { 
	unordered_map<int, unordered_map<int, int> > :: iterator itr;
	for (itr = incomingEdges.begin(); itr != incomingEdges.end(); itr++) {
		if (outgoingEdges.find(itr->first) == outgoingEdges.end()) { //no outgoing edges
			removeSoon.push_back(itr->first);
		}
	}
}

//utility function for printing the contents of a vector
void printVector(vector<int> v) {
	for (int i = 0; i < v.size(); i++)
		cout << v[i] << " ";
	cout << '\n';
}

//utility function for printing the contents of an unordered map
void printMap(unordered_map<int, unordered_map<int, int> > map){
	unordered_map<int, unordered_map<int, int> > :: iterator itr;
	unordered_map<int, int> :: iterator itr2;
	cout << "-------------------------------------\n";
	for (itr = map.begin(); itr != map.end(); itr++) {
		cout << itr->first << ": ";
		for (itr2 = map[itr->first].begin(); itr2 != map[itr->first].end(); itr2++) {
			cout << itr2->first << " ";
		}
		cout << '\n';
	}
}

//utility function for printing the contents of an unordered map
void printMap (unordered_map<int, int> map) {
	unordered_map<int, int> :: iterator itr;
        cout << "-------------------------------------\n";
	for (itr = map.begin(); itr != map.end(); itr++) {
		cout << itr->first << '\n';
	}
}
